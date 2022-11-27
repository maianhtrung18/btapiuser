function SanPhamServices(){
    this.url = "https://63676ecaf5f549f052d54efc.mockapi.io";

    
    this.danhSachSP = function(){
        return axios({
            method: 'get',

        //    url: `${this.url}/danhsachsp`,
        //  })
        // return axios({
        //     method: 'get',
        //     url: `https://636a3113b10125b78fd342a4.mockapi.io/Product`,
        
        // });

            url: `${this.url}/Product`,
          })

    }
}