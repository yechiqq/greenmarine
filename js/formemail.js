
$( document ).ready(function() {
    $('#CTAform').on('submit', function(event) {
        event.preventDefault();
        var formData = JSON.stringify($("#CTAform").serializeArray());
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbzhuG01T_n_d_bXutazianX86ahWH_qo7S5o2BirXSx7pGUhWvA1kwnV43zngE_zWh_yw/exec",
            data: formData,
            success: function(){},
            dataType: "json",
            contentType : "application/json"
          });
      });
});