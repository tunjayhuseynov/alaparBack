@extends('ap.layout')
@section('content')
<table id="yanDb" class="display">
    <thead>
        <tr>
            @foreach ($columnNames as $item)
            <th>{{$item}}</th>
            @endforeach
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        @foreach($data as $value)
            <tr>
                @foreach ($columnNames as $item)
            <td><input type="text" data-id="{{$value->id}}" name="{{$item}}" value="{{$value->$item}}" @if($item == "id") disabled @endif /></td>
                @endforeach
                <td><button data-id="{{$value->id}}" class="btn btn-primary" onclick="deleteButton(this)">Sil</button></td>
            </tr>
        @endforeach
    </tbody>
</table>

<script>

    let header = {'Content-Type': 'application/json'};
    
    let postChange = async (db, id, name, value)=>{
        let send = await fetch(`/{{$globalShare["adminPart"]}}/yanDb/${db}/${id}/${name}`,{
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                column: value,
                _token: '{{ csrf_token() }}'
            }),
        });

        if(send.ok) console.log("Update is Done")
        else console.log("Error in Update")
    }
    
    let addButton = async (db) => {
        let res = await fetch(`/{{$globalShare["adminPart"]}}/yanDb/${db}`,{
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                _token: '{{ csrf_token() }}'
            }),
        });
        
        if(res.ok){ 
            console.log(`A new row is added in ${db}`)
            location.reload()
        }
        else console.log("Error in adding a row")
    };


    let deleteButton =  async (e)=>{
        let ans = confirm("Silmek Isteyirsiniz?");

        if(ans){
        let res =  await fetch(`/{{$globalShare["adminPart"]}}/yanDb/{{$db}}/${e.dataset.id}`,{
            method: "DELETE",
            headers: header,
            body: JSON.stringify({
                _token: '{{ csrf_token() }}'
            }),
        });

            if(res.ok) {
                console.log(`Deleted ${e.dataset.id}`)
                location.reload()
            }
            else console.log(`Error in Deleting ${e.dataset.id}`)
        }else{
            console.log("Denied")
        }
    }


    document.querySelectorAll("input").forEach(e=>{
        e.addEventListener("change", async (e)=>{
            await postChange('{{$db}}', e.target.dataset.id, e.target.name, e.target.value);        
        })
    })

    $(document).ready(function () {
        $('#yanDb').DataTable({
            dom: 'lBfrtip',
            pageLength: 25,
            buttons: [{
                text: 'Əlave Et',
                action: async function (e, dt, node, config) {
                    addButton('{{$db}}')
                }
            }]
        });
    });


</script>

@endsection
