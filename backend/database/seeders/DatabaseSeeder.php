<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Board;
use App\Models\Item;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()
            ->count(3)
            ->create();

        Board::factory()
            ->count(5)
            ->hasUser(1)
            ->hasItems(rand(3, 15))
            ->create();
    }
}
