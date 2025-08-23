export const apiEndPoints = {
    signup : "auth/signup",
    login: "auth/login",
    updatePassword: "auth/change-password",
    loanApply : "loan/apply",
    loanFilter :(category)=> `loan/filter?category=${category}`,
    loanGetActive: "loan/allLoan",
    loanApplications: "loan/allApplications",
    //ADMIN
    loanCreate : "admin/create-loan",
    loanGetAll : "admin/admin-loan",
    loanStatusUpdate :(id)=> `admin/admin-loan/${id}`
    
}