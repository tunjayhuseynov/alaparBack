<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CustomClass\DataManipulation;
use View;
use DB;

class ap extends Controller
{
    public function __construct()
    {
        $tableNames = array(
            "ad_packages",
            "ad_statuses",
            "cities",
            "currencies",
            "metros",
            "regions",
            "rentpaymenttypes",
            "selltypes",
            "villages",
        );

        $viewArray = array(
            "tableNames" => $tableNames
        );

        View::share('globalShare', $viewArray);
    }

    public function index(Request $req) 
    {
        $data = DataManipulation::getAllFromCategory("ofis");

        return View("ap/pages/home");
    }
    
    public function yanDb(Request $req, $db)
    {
        $data = DataManipulation::getDb($db);;
        
        return View("ap/pages/yanDb", compact(["data", "db"]));
    }

    public function yanDbAdd(Request $req, $db)
    {
        DB::table($db)->insert([
            'name' => $req->input("name")
        ]);

        return response()->json("Success", 200);
    }

    public function yanDbDelete(Request $req, $db, $id)
    {
        DB::table($db)->where("id", $id)->delete();

        return response()->json("Success", 200);
    }
}
