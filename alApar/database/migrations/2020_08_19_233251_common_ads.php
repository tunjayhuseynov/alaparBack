<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CommonAds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('common_ads', function (Blueprint $table) {
            $table->charset = "utf8mb4";
            $table->unsignedBigInteger('common_ad_id'); // Id
            $table->dateTime('createdDate', 0); // Created Date
            $table->dateTime('modifiedDate', 0); // Modified Date
            $table->dateTime('fromDate', 0); // Ad is active from this Date
            $table->dateTime('tillDate', 0); // Ad is actibe to this Date
            $table->foreignId('adStatusId'); // Ad is pending, offline or online +++
            $table->foreignId('adPackageId'); // Ad is premium, Vip or standart +++
            $table->foreignId('cityId'); // City +++
            $table->foreignId('regionId'); // Region +++
            $table->foreignId('villageId'); // Village +++
            $table->foreignId('metroId'); // Metro +++
            $table->foreignId('personalContactId'); // Contact -
            $table->foreignId('sellTypeId'); // Satilir or Kiraye +++
            $table->foreignId('rentPaymentTypeId')->nullable(); // Only In Kiraye - Gunluk/Ayliq +++
            $table->float('price', 8, 2); // Price
            $table->foreignId('currencyId');// Currency +++
            $table->float('areaSize', 8, 2); // Area Size
            $table->text('adress');// Location Adress
            $table->float('longitude', 8, 8)->nullable();  // x coordinat
            $table->float('latitude', 8, 8)->nullable();  //  y coordinat
            $table->text('about'); // About
            $table->boolean('hasLicense'); // Cixaris
            $table->boolean('hasMortgage'); // Ipoteka
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('common_ads');
    }
}
