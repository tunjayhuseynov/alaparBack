<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\CustomClass\DataManipulationHome;
use App\Http\Controllers\CustomClass\common_ad_home_crud;
use View;
use DB;

class homeAP extends Controller
{
    public function __construct()
    {
        $tableNames = DataManipulationHome::getYanDb()->toArray();
        $packs = DataManipulationHome::getDb("ad_packages")->toArray();

        $viewArray = array(
            "yanTableNames" => $tableNames,
            "ad_packages" => $packs,
            "adminPart" => "adminHome"
        );

        View::share('globalShare', $viewArray);
    }

    public function index(Request $req) 
    {

        return View("ap/pages/home");
    }

    public function elanlar(Request $req, $id) // Standart Elan View
    {
        $coll = DataManipulationHome::getOneFromCommonByPacket($id);

        return View("ap/pages/elanlar", compact(["coll"]));
    }


    /* Elan Elave Eleme */
    /* Elan Elave Eleme */
    /* Elan Elave Eleme */

    public function elanElaveEt(Request $req) // Page View
    {
        $coll = DataManipulationHome::getYanDbAsCollection();

        return View("ap/pages/elanElaveEt", compact(["coll"]));
    }

    public function elanElaveEtPost(Request $req) // Post
    {
        $adCrud = new common_ad_home_crud($req);

        $adCrud->create();

        $message = 'Elan Əlavə Olundu';

        return redirect()->back()->with('message', $message);
    }
    
    /* Yan Db */
    /* Yan Db */
    /* Yan Db */

    //Show
    public function yanDb(Request $req, $db) // Show View
    {
        $data = DataManipulationHome::getDb($db);
        $columnNames = DB::getSchemaBuilder()->getColumnListing($db);
        
        return View("ap/pages/yanDb", compact(["data", "db", "columnNames"]));
    }

    // Add
    public function yanDbAdd(Request $req, $db) // Post
    {
        DB::insert("insert into $db (id) values (null)");

        return response()->json("Success", 200);
    }

    // Delete
    public function yanDbDelete(Request $req, $db, $id) // Delete
    {
        DB::table($db)->where("id", $id)->delete();

        return response()->json("Success", 200);
    }

    // Update
    public function yanDbColumnUpdate(Request $req, $db, $id, $column) // Update
    {
        $data =  DB::table($db)->where('id', $id,)->update([
            $column => $req->input('column')
        ]);

        return response()->json($data, 200);
    }

}
