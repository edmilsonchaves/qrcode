
function gerarQRCode () {
    var inputUser = document.querySelector('textarea').value;
    var googleAPI = 'https://chart.googleapis.com/chart?&cht=qr&chs=350x350&chl=';
    var conteudoQRCode = googleAPI + encodeURIComponent(inputUser);
    document.querySelector('#qrcodeImage').src = conteudoQRCode;
    document.querySelector('textarea').style.display = 'none';
    document.querySelector('.qrcode').style.display = 'none';
    document.querySelector('.voltar').style.display = 'block';
    document.querySelector('img').style.display = 'block';

    if (inputUser == ''){
        alert('Campo vazio, tente novamente!')
        voltarQRCode()
    }
}

function voltarQRCode () {
    document.querySelector('.qrcode').style.display = 'block';
    document.querySelector('.voltar').style.display = 'none';
    document.querySelector('textarea').style.display = 'block';
    document.querySelector('img').style.display = 'none';
    document.querySelector('textarea').value = ''
    document.querySelector('textarea').style.placeholder = 'Insira seu link aqui...';
}
