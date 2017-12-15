export const modifyEmit = (patientInfo, token,MaSo) => {
    return {
        type : 'EMIT_MODIFY_REQUEST',
        patientInfo,
        token,
        MaSo
    }
}