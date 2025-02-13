document.querySelector('#upload').addEventListener('change', function() {
    document.querySelector('.file-text').textContent = this.files[0].name;
})