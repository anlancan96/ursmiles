export const modifyEmit1 = (patientInfo, token, MaSo) => {
    return {
        type : 'EMIT_MODIFY_REQUEST-1',
        patientInfo,
        token,
        MaSo
    }
}