export const modifyEmit1 = (patientInfo, token) => {
    return {
        type : 'EMIT_MODIFY_REQUEST-1',
        patientInfo,
        token
    }
}