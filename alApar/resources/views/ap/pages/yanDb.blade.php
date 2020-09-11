@extends('ap.layout')
@section('content')
<table id="yanDb" class="display">
    <thead>
        <tr>
            <th style="width: 100px">Id Nömrəsi</th>
            <th>Adı</th>
            <th>Hərəkətlər</th>
        </tr>
    </thead>
    <tbody>
        @foreach($data as $value)
            <tr>
                <td>{{ $value->id }}</td>
                <td>{{ $value->name }}</td>
                <td><button class="btn btn-primary" onclick="btnFun(false, {{$value->id}}, '{{$value->name}}')">Sil</button></td>
            </tr>
        @endforeach
    </tbody>
</table>

<script>
    let btnFun = async (isProm, id, name) => {
        let icaze = isProm?prompt("Yeni Ad Əlavə Et:"):confirm(`${name} Silinsin?`)
        let query = isProm?'/admin/yanDb/{{ $db }}':`/admin/yanDb/{{ $db }}/${id}`
        if (icaze) {
            let send = await fetch(query, {
                method: isProm?'POST':'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: icaze,
                    id: id,
                    _token: '{{ csrf_token() }}'
                })
            });
            if (send.ok) location.reload()
            else alert("Səhv Gedən Nəsə Var!")
        }
    }

    $(document).ready(function () {
        $('#yanDb').DataTable({
            dom: 'lBfrtip',
            buttons: [{
                text: 'Əlave Et',
                action: async function (e, dt, node, config) {
                    btnFun(true, null)
                }
            }]
        });
    });

</script>

@endsection
