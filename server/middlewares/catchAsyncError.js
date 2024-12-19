export const catchAsyncError = (user)=>{
    return (req, res, next) =>{
        Promise.resolve(user(req, res, next)).catch(next);
    }
}