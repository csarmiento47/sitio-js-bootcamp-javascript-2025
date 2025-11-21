$(function () {
    let urlRestCountries = `https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,translations,region,coatOfArms`;

    $.getJSON(urlRestCountries, function (dataCountries) {
        console.log(dataCountries);
        let table_body = '';

        for(let i=0; i < dataCountries.length; i++){
            //console.log((Object.values(dataCountries[i].currencies)[0].name) ? "hola":"chao");
            //console.log(Object.values(dataCountries[i].currencies)[0].symbol);
            console.log((Object.keys(dataCountries[i].currencies)[0]) ? Object.values(dataCountries[i].currencies)[0].name:"NONE");
            table_body = table_body + 
            `
                <tr>
                    <td>${dataCountries[i].translations.spa.common}</td>
                    <td>${dataCountries[i].capital}</td>
                    <td>${dataCountries[i].region}</td>
                    <td class="text-center">
                        <ul class="list-unstyled">
                            <li>${(Object.keys(dataCountries[i].currencies)[0]) ? Object.values(dataCountries[i].currencies)[0].name:"NONE"}</li>
                            <li>${(Object.keys(dataCountries[i].currencies)[0]) ? Object.values(dataCountries[i].currencies)[0].symbol:"NONE"}</li>
                        </ul>
                    </td>
                    <td class="text-center align-middle">
                        <img class="img-country" src=${dataCountries[i].flags.svg} alt=${dataCountries[i].flags.alt}>
                    </td>
                    <td class="text-center align-middle">
                        <img class="img-country" src=${(dataCountries[i].coatOfArms.svg) ? dataCountries[i].coatOfArms.svg:"assets/img/image-not-found.svg"} alt="Coat of Arms">
                    </td>
                </tr>
            `
        }
        $('#table_body').append(table_body);
    }).fail(function () {
        Swal.fire({
            title: "Ups!!!",
            text: "Al parecer tenemos problemitas con la conexión...",
            icon: "error"
        });
    });
});

$(function() {
    $('#filtro').on('keyup',function() {
        let texto = $(this).val().toLowerCase();
        $('#table_body tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1);
        });
    });
});