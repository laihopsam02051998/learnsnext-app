import axios from "axios";

export async function productsFetch () {
  let data
  try {
    const response = await axios.get('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim');
    data = response.data;
  }catch (err){
    console.log(err)
  }

  return {
    data
  }
}

  function update() {

  }

  function deleteProducts() {

  }

