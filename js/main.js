//function hienthidanhsachlop(){
            // Dữ liệu danh sách lớp
            const danhSachLop = [
                { hoTen:"Ninh Thị Lành", gioiTinh: "Nữ", noiSinh: "Nam Định" },
                { hoTen: "Đỗ Hà Duyên", gioiTinh: "Nữ", noiSinh: "Nam Định" },
                { hoTen: "Đỗ Thị Lan Hương", gioiTinh: "Nữ", noiSinh: "Hải Phòng" },
                { hoTen: "Hoàng Thị Hiền", gioiTinh: "Nữ", noiSinh: "Hải Phòng" },
                { hoTen: "Phạm Ngọc Ánh ", gioiTinh: "Nữ", noiSinh: "Thái Bình" },
                { hoTen: "Nguyễn Thị Yến Nhi ", gioiTinh: "Nữ", noiSinh: " Thái Bình " },
                { hoTen: "Trần Thị Thu Huyền", gioiTinh: "Nữ", noiSinh: "Hà Nội" },
                {hoTen: "Nguyễn Công Mạnh",gioiTinh:" Nam",noisinh:"Hà Tĩnh"},
                {hoTen:"Nguyễn Quang Huy",gioiTinh:"Nam",noisinh:"Hà Tĩnh" },
            ];
            //lấy phần tử
            function hienthidanhsachlop(){
            const danhsachhtml = document.getElementById("danh-sach-lop");
            // Kiểm tra nếu phần tử không tồn tại
    if (!danhsachhtml) {
        console.error("Không tìm thấy phần tử HTML với ID 'Danh-sách'");
        return;
    }
    // Tạo nội dung bảng HTML
    const table = `
        <table >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và Tên</th>
                    <th>Giới Tính</th>
                    <th>Nơi Sinh</th>
                </tr>
            </thead>
            <tbody>
                ${Thanhvien.map((hocsinh, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="ht">${hocsinh.Hoten}</td>
                        <td>${hocsinh.Gioitinh}</td>
                        <td>${hocsinh.Noisinh}</td>
                    </tr>
                `).join("")}
                
            </tbody>
        </table>
    `;
    // Gắn bảng vào phần tử HTML
    danhsachhtml.innerHTML = table;
}        
//goi ham de hien thi danh sach
window.onload =  hienthidanhsachlop;
        