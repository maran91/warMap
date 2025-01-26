<?php

namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;
use App\Enums\ResourceType;
use Throwable;

class UpdateUserResources extends Command
{
    /**
     * @throws Throwable
     **/

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:food {--dry-run : Simulate the process without making changes}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Grow food';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {

        try {
            $groupedUsers = DB::table('user_resources')->select('user_id', 'resource_type_id', 'quantity')->orderBy(
                'user_id'
            )->get()->groupBy('user_id');

            DB::beginTransaction();

            foreach ($groupedUsers as $userId => $userResources) {
                $territoryResource = $userResources->firstWhere('resource_type_id', ResourceType::TERRITORY);
                if ($territoryResource) {
                    $amountToIncrement = $territoryResource->quantity * 5;

                    if ($this->option('dry-run')) {
                        $this->info("User $userId: Incrementing food by $amountToIncrement (Dry Run)");
                        continue;
                    }

                    DB::table('user_resources')->where('user_id', $userId)->where(
                        'resource_type_id',
                        ResourceType::FOOD
                    )->increment(
                        'quantity',
                        $amountToIncrement
                    );
                }
            }
            if ($this->option('dry-run')) {
                $this->info('Dry run completed successfully.');
            } else {
                $this->info('Added food to user resources successfully.');
                DB::commit();
            }

            return 0;
        } catch (Throwable $e) {
            try {
                DB::rollBack();
            } catch (Throwable $rollbackError) {
                $this->error('Rollback failed: ' . $rollbackError->getMessage());
            }

            $this->error('A critical error occurred: ' . $e->getMessage());
            return 1;
        }
    }
}
