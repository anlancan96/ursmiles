export default (state) => {
    if (state.Ten.trim() === '') return { status: 0, message: 'Bạn chưa điền tên!' };
    else if (state.MaHoSo.trim() === '') return { status: 0, message: 'MaHoSo không được rỗng!' }
    return { status: 1 }
}