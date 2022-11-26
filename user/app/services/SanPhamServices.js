function SanPhamServices(){
    this.url = "https://636a3113b10125b78fd342a4.mockapi.io";
    
    this.danhSachSP = function(){
        return axios({
            method: 'get',
            url: `${this.url}/Product`,
          })
    }
}