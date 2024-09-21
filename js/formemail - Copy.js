
$( document ).ready(function() {
    $('#CTAform').on('submit', function(event) {
        event.preventDefault();

        const data = {
            name: 'John',
            email: 'john@domain.com',
            message: 'Receiving forms is easy and simple now!',
          };
          
          const url = 'https://script.google.com/macros/s/<Deployment ID>/exec';
          
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => console.log('data', data))
            .catch((err) => console.log('err', err));

        /*! var formData = JSON.stringify($("#CTAform").serializeArray());
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbzhuG01T_n_d_bXutazianX86ahWH_qo7S5o2BirXSx7pGUhWvA1kwnV43zngE_zWh_yw/exec",
            data: formData,
            success: function(){},
            crossDomain: true,
            dataType: 'json',
            contentType : "application/json"
          });*/
      });
});