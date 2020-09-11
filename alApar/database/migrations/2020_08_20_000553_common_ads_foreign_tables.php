<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CommonAdsForeignTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ad_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('ad_packages', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('regions', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('villages', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('metros', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('sellTypes', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('rentPaymentTypes', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
        });

        Schema::create('personalContacts', function (Blueprint $table) {
            $table->id();
            $table->string('contactName',100);
            $table->string('contactNumber',100);
            $table->string('email',100);
            $table->boolean('isCall');
            $table->boolean('isWp');
            
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('ad_statuses');
        Schema::drop('ad_packages');
        Schema::drop('cities');
        Schema::drop('regions');
        Schema::drop('villages');
        Schema::drop('metros');
        Schema::drop('sellType');
        Schema::drop('rentPaymentTypes');
        Schema::drop('currencies');
        Schema::drop('personalContacts');
    }
}
