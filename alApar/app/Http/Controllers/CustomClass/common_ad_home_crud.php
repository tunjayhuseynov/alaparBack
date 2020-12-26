<?php

namespace App\Http\Controllers\CustomClass;

use DB;

class common_ad_home_crud
{
    private $req;
    private $unsetArr = ["contactName", "contactNumber", "email", "isCall", "isWp"];

    public function __construct($req)
    {  
       $this->req = $req;
       date_default_timezone_set('UTC');
    }
    public function create()
    {
        $arr = $this->req->all();
        $contactInfo = array();

        unset($arr["_token"]);
        unset($arr["MAX_FILE_SIZE"]);

        foreach ($this->unsetArr as $key => $value) {
            unset($arr[$value]);
            $contactInfo[$value] = $this->req->$value;
        }

        $getContactId = DB::table('personalcontacts')->insertGetId($contactInfo);
        

        $arr["adToken"] = bin2hex(random_bytes(16));
        $arr["createdDate"] = $arr["fromDate"] = $arr["modifiedDate"] = date("y-m-d h:i:s");
        $arr["tillDate"] = date("y-m-d h:i:s", strtotime(date("y-m-d h:i:s") .' +30 days'));
        $arr["adStatusId"] = 1;
        $arr["personalContactId"] = $getContactId;

       return $id = DB::table('common_ads')->insertGetId($arr);
    }
    
    public function readAll()
    {
        return DB::table('common_ads')->get();
    }
    
    public function readOne($id)
    {
        return DB::table('common_ads')->find($id);
    }
    
    public function update()
    {
        $arr = $this->req->all();
        $arr["adToken"] = bin2hex(random_bytes(16));
        $arr["modifiedDate"] = date("d/m/y h:i:sa");

       return $id = DB::table('common_ads')->update($arr);
    }

    public function extendDate($id, $days)
    {
        $arr = array();

        $arr["fromDate"] = date("d/m/y h:i:sa");
        $arr["tillDate"] = date("d/m/y h:i:sa", strtotime(date("d/m/y h:i:sa") .' +'.$days.' days'));

        return $id = DB::table('common_ads')->where("common_ad_id", $id)->update($arr);
    }

    public function delete()
    {
        
    }

}
