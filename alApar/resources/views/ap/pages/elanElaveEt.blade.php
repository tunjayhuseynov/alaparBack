@extends('ap.layout')

@section('content')

<style>
    label {
        display: block;
    }

    span.select2 {
        width: 50% !important;
    }

    .col-6 {
        padding: 20px
    }

    .floorOption {
        display: none;
    }

</style>
@if(\Session::has('message'))
<div class="alert alert-success" role="alert">
    {!!\Session::has('message')!!}
  </div>
@endif
<form action="/admin/elanElaveEt" method="post" enctype="multipart/form-data">
    @csrf
    <div class="container-fluid" style="padding-bottom: 20px">
        <div class="row">
            <div class="col-6">
                <label for="city">Şəhər:</label>
                <select class="js-example-basic-single" id="city" name="cityId">
                    <option value=""></option>
                    @foreach($coll["cities"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach

                </select>
            </div>
            <div class="col-6">
                <label for="Region">Rayon:</label>
                <select class="js-example-basic-single" id="regions" name="regionId" disabled>
                    <option value=""></option>
                    @foreach($coll["regions"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="Village">Qəsəbə:</label>
                <select class="js-example-basic-single" id="villages" name="villageId" disabled>
                    <option value=""></option>
                    {{-- @foreach($coll["villages"] as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach--}}
                </select>
            </div>
            <div class="col-6">
                <label for="Metro">Metro:</label>
                <select class="js-example-basic-single" name="metroId" disabled>
                    <option value=""></option>
                    @foreach($coll["metros"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="">Satış:</label>
                <select class="js-example-basic-single" name="sellTypeId">
                    <option value=""></option>
                    @foreach($coll["selltypes"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="">Qiymət:</label>
                <input type="number" name="price"> <br> <br>
                <label for="">Valyuta:</label>
                <select class="js-example-basic-single" name="currencyId">
                    <option value=""></option>
                    @foreach($coll["currencies"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="">Mülk:</label>
                <select class="js-example-basic-single" id="property" name="propertyId">
                    <option value=""></option>
                    @foreach($coll["properties"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="">Sahə:</label>
                <input type="number" name="areaSize">
            </div>
            <div class="col-6 floorOption">
                <label for="">Otaq Sayı:</label>
                <input type="number" name="roomAmount"><br><br>
                <label for="">Binanın Mərtəbə Sayı:</label>
                <input type="number" name="floorAmount"><br><br>
                <label for="">Mərtəbə:</label>
                <input type="number" name="floor">
            </div>
            <div class="offset-6 floorOption"></div>
            <div class="col-6">
                <label for="">Adress:</label>
                <textarea name="adress" id="" cols="30" rows="5"></textarea>
            </div>
            <div class="col-6">
                <label for="">Haqqında:</label>
                <textarea name="about" id="" cols="30" rows="5"></textarea>
            </div>
            <div class="col-6">
                <input type="hidden" name="hasLicense" value="0" />
                <input type="checkbox" name="hasLicense" value="1"> Çıxarış <br>
                <input type="hidden" name="hasMortgage" value="0" />
                <input type="checkbox" name="hasMortgage" value="1"> Ipoteka
            </div>
            <div class="col-6">
                <label for="">Paket:</label>
                <select class="js-example-basic-single" name="adPackageId">
                    <option value=""></option>
                    @foreach($coll["ad_packages"] as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-6">
                <label for="">Ad:</label>
                <input type="text" class="form-control" name="contactName">
                <label for="">Nömrə:</label>
                <input type="text" class="form-control" name="contactNumber">
                <label for="">Mail:</label>
                <input type="text" class="form-control" name="email"> <br>
                <input type="hidden" name="isCall" value="0" />
                <input type="checkbox" name="isCall" value="1"> Zəng <br>
                <input type="hidden" name="isWp" value="0" />
                <input type="checkbox" name="isWp" value="1"> WhatsApp
            </div>
            <div class="col-6">
                <div class="custom-file-container" data-upload-id="myUniqueUploadId">
                    <label>Şəkillər: <a href="javascript:void(0)" class="custom-file-container__image-clear"
                            title="Şəkilləri Təmizlə">&times;</a></label>

                    <label class="custom-file-container__custom-file">
                        <input type="file" class="custom-file-container__custom-file__custom-file-input" name="images[]"
                            accept="image/*" multiple aria-label="Choose File">
                        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                        <span class="custom-file-container__custom-file__custom-file-control"></span>
                    </label>
                    <div class="custom-file-container__image-preview"></div>
                </div>
            </div>
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary">Əlave Et</button>
            </div>
        </div>
    </div>
    
</form>
<script src="https://unpkg.com/file-upload-with-preview@4.0.2/dist/file-upload-with-preview.min.js"></script>

<script>
    var upload = new FileUploadWithPreview('myUniqueUploadId', {
        showDeleteButtonOnImages: true,
        text: {
            chooseFile: 'Yüklə',
            browse: 'Seçim',
            selectedCount: 'Seçilən Sayı',
        },
    })

    $(document).ready(function () {
        $('.js-example-basic-single').select2({
            minimumResultsForSearch: Infinity,
            placeholder: "Secim"
        });
    });

    let disNames = ["regionId", "villageId", "metroId"]

    $("#city").on('select2:select', (sel) => disNames.forEach(e => document
        .getElementsByName(e).forEach(w => w.disabled = sel.params.data.id !== "1")))


    $("#regions").on('select2:select', async (s) => {
        $('#villages').html('')
        let villages = await setVillage(s.params.data.id)

        villages.forEach(e => {
            $('#villages').append(`<option value=${e.id}>${e.name}</option>`)
        })
    })


    let setVillage = async (id) => {
        let getVilages = await fetch(`/admin/yanDb/getVillageByRegion/${id}`);
        let villages = await getVilages.json()
        console.log(villages)
        return villages
    }

    let id4Floor = [1]
    $("#property").on('select2:select', async (s) => {

        if (id4Floor.includes(parseInt(s.params.data.id))) {
            $(".floorOption").css({
                'display': 'block'
            })
        } else {
            $(".floorOption").css({
                'display': 'none'
            })
        }
    })

</script>

@endsection
