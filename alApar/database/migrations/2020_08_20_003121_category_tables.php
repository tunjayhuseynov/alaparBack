<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yeni_tikili', function (Blueprint $table) {
            $table->bigIncrements('yeni_tikili_id');
            $table->foreignId("adId");
            $table->integer("roomAmount");
            $table->integer("floorAmount");
            $table->integer("floor");
        });
        Schema::create('kohne_tikili', function (Blueprint $table) {
            $table->bigIncrements('kohne_tikili_id');
            $table->foreignId("adId");
            $table->integer("roomAmount");
            $table->integer("floorAmount");
            $table->integer("floor");
        });
        Schema::create('torpaq', function (Blueprint $table) {
            $table->bigIncrements('torpaq_id');
            $table->foreignId("adId");
        });
        Schema::create('heyet_evi', function (Blueprint $table) {
            $table->bigIncrements('heyet_evi_id');
            $table->foreignId("adId");
            $table->integer("roomAmount");
            $table->integer("floorAmount");
        });
        Schema::create('ofis', function (Blueprint $table) {
            $table->bigIncrements('ofis_id');
            $table->foreignId("adId");
            $table->integer("roomAmount");
            $table->integer("floorAmount");
            $table->integer("floor");
        });
        Schema::create('qaraj', function (Blueprint $table) {
            $table->bigIncrements('qaraj_id');
            $table->foreignId("adId");
        });
        Schema::create('obyekt', function (Blueprint $table) {
            $table->bigIncrements('obyekt_id');
            $table->foreignId("adId");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('yeni_tikili');
        Schema::drop('kohne_tikili');
        Schema::drop('torpaq');
        Schema::drop('heyet_evi');
        Schema::drop('ofis');
        Schema::drop('qaraj');
        Schema::drop('obyekt');
    }
}
