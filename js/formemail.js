const url =
  'https://script.google.com/macros/s/AKfycbzhuG01T_n_d_bXutazianX86ahWH_qo7S5o2BirXSx7pGUhWvA1kwnV43zngE_zWh_yw/exec';

$( document ).ready(function() {
document
  .getElementById('CTAform')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Successful', data);
        this.reset();
      })
      .catch((err) => console.log('err', err));
  });
});