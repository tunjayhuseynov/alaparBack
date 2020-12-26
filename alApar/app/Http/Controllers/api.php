<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\CustomClass\DataManipulation;
use DB;

class home extends Controller
{

    public function allDynamicForCategory(Request $req, $table)
    {
        $data = DB::table($table)->join('common_ads', $table.'.'.$table.'_id', '=', 'common_ads.common_ad_id')->get();

        return response()->json($data, 200);
    }

    public function oneDynamicForCategory(Request $req, $table, $id)
    {
        $data = DB::table($table)->join('common_ads', $table.'.'.$table.'_id', '=', 'common_ads.common_ad_id')->find($id);

        return response()->json($data, 200);
    }

}
