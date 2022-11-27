function ProductList() {
    this.layDanhSachSP = function () {
        var promise = axios({
            method: 'get',
            url: 'https://636a3113b10125b78fd342a4.mockapi.io/Product',
        });
        console.log(promise);
        return promise;
    }
    this.themSP = function (spNew) {
        // data: dữ liệu lưu xuống BE ( dữ liệu kiểu đối tượng Object)
        // trả về đối tượng promise từ thư việ axios
        return axios({
            method: 'post',
            url: 'https://mockapi.io/projects/63676ecaf5f549f052d54efd',
            data: spNew
        });
    }
    this.xoaSP = function(id){
        return axios({
            method: 'delete',
            url: `https://mockapi.io/projects/63676ecaf5f549f052d54efd/${id}`
        });
    }
    this.xemSP = function(id){
        return axios({
            method: 'get',
            url: `https://mockapi.io/projects/63676ecaf5f549f052d54efd/${id}`,
        
        });
    }
    this.capNhatSP = function(id, newData){
        return axios({
            method: 'put',
            url: `https://mockapi.io/projects/63676ecaf5f549f052d54efd/${id}`,
            data: newData
          });
    }
}