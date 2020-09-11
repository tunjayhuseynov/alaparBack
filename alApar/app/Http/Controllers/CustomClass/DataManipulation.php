<?php 

namespace App\Http\Controllers\CustomClass;

use DB;

class DataManipulation {

    public static function getAllFromCategory($table)
    {
        return $data = (new self)
        ->getCombinationByCategory($table)
        ->get();
    }

    public function getOneFromCateogry($id)
    {
        return $data = (new self)
        ->getCombinationByCategory($table)
        ->find($id);
    }

    public static function getDb($table){
        return DB::table($table)->get();
    }


    /* Query Generation */

    private function getCombinationByCategory($table){
        $query = (new self)
        ->setAdJoins(DB::table($table)->join('common_ads', $table.'.'.$table.'_id', '=', 'common_ads.common_ad_id'));
        
        return $data = (new self)
        ->getSelection($query, $table);
    }
    
    private function setAdJoins($query)
    {
        return $query
        ->join('ad_packages', 'ad_packages.id', '=', 'common_ads.adPackageId')
        ->join('ad_statuses', 'ad_statuses.id', '=', 'common_ads.adStatusId')
        ->join('cities', 'cities.id', '=', 'common_ads.cityId')
        ->join('currencies', 'currencies.id', '=', 'common_ads.currencyId')
        ->join('metros', 'metros.id', '=', 'common_ads.metroId')
        ->join('regions', 'regions.id', '=', 'common_ads.regionId')
        ->join('rentpaymenttypes', 'rentpaymenttypes.id', '=', 'common_ads.rentPaymentTypeId')
        ->join('selltypes', 'selltypes.id', '=', 'common_ads.sellTypeId')
        ->join('villages', 'villages.id', '=', 'common_ads.villageId')
        ->join('personalcontacts', 'personalcontacts.id', '=', 'common_ads.personalContactId');
    }

    private function getSelection($query, $table){
        return $query
        ->select(
            $table.'.*',
            'ad_packages.name as packageName',
            'ad_statuses.name as statusName',
            'cities.name as cityName',
            'currencies.name as currencyName',
            'metros.name as metroName',
            'regions.name as regionName',
            'rentpaymenttypes.name as rentPayName',
            'selltypes.name as sellName',
            'villages.name as villageName',
            'personalcontacts.*',
        );
    }
}
