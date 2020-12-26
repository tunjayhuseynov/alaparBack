<?php 

namespace App\Http\Controllers\CustomClass;

use DB;

class DataManipulationHome {

    /* Get Db Table By Table Name */
    /* Get Db Table By Table Name */
    /* Get Db Table By Table Name */

    public static function getDb($table){
        return DB::table($table)->get();
    }

    public static function getAllFromCommon()
    {
        return $data = (new self)
        ->getCombinationCommonAd()
        ->get();
    }

    public static function getOneFromCommon($id)
    {
        return $data = (new self)
        ->getCombinationCommonAd()
        ->find($id);
    }

    // Get Ads By Packet Type
    public static function getOneFromCommonByPacket($packId)
    {
        return $data = (new self)
        ->getCombinationCommonAd()
        ->where("adPackageId",$packId);
    }


    /* Get Database Tables */
    /* Get Database Tables */
    /* Get Database Tables */

    public static function getYanDb(){
        return DB::table('yanDBs')->pluck("name");
    }
    
    public static function getYanDbAsCollection() // 
    {
        $yanDb = self::getYanDb();
        $arr = array();
        foreach ($yanDb as $key => $value) {
            $arr[$value] = DB::table($value)->orderBy("name", "asc")->get();
        }
        return $arr;
    }


    /* Query Generation */

    private function getCombinationCommonAd(){ // First Call Common Ad, then Join Process, then Selection process
        $query = (new self)
        ->setAdJoins(DB::table("common_ads"));
        
        return $data = (new self)
        ->getSelection($query);
    }
    
    private function setAdJoins($query) // Common Ad Table Join Precess
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

    private function getSelection($query){ // Selection After Join Process
        return $query
        ->select(
            'common_ads.*',
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
