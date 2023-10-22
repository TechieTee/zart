
export function SAVE_TOKEN_USER_DETAILS(value, user) {
    localStorage.setItem('token', value);
    localStorage.setItem('userData', JSON.stringify(user));
}

export function SET_OTP(value) {
    localStorage.setItem('confirmOTP', value);
}

export function SET_OTP_USER_DETAILS(value) {
    localStorage.setItem('userDetailsOTP', value);
}

export function GET_TOKEN() {
    return localStorage.getItem('token');
}
export function GET_USER() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function SAVE_SUBJECT_ID(value){
    localStorage.setItem('sbj_ID', value);
}
export function SAVE_PROGRESS_STEP(value){
    localStorage.setItem('formProgressStep', value);
}

export function GET_SUBJECT_ID(){
    
return localStorage.getItem('sbj_ID');
}

export function GET_PROGRESS_STEP(){
    return localStorage.getItem('formProgressStep');
}

