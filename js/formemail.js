const url =
  'https://script.google.com/macros/s/AKfycbxUtOhfmbn3p2vC3w2IxLcT3ahJh2IHP_v1ERB-rBE_iO7Zoucs3O2o3KkJ-ySQanY76g/exec';

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