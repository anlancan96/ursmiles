export const modifyEmit = (patientInfo, token) => {
    return {
        type : 'EMIT_MODIFY_REQUEST',
        patientInfo,
        token
    }
}