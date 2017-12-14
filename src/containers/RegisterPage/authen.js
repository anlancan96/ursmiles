export default (state) => {
    if (state.Username.trim().length < 6) return { status: 0, message: 'Tên tài khoản dài ít nhất 6 kí tự!' };
    else if (state.Password.trim() === '') return { status: 0, message: 'Password không được rỗng!' }
    else if (state.Password !== state.ConfirmPassword) return { status: 0, message: 'Mật khẩu không trùng!' }
    else if (state.HoTen.trim() === '') return { status: 0, message: 'Họ tên không được rỗng!' }
    return { status: 1 }
}