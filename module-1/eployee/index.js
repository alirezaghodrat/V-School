function Employee (name,jobTitle,salary,status,job){
    this.name=name
    this.jobTitle=jobTitle
    this.salary=salary
    this.status=status
    this.job=job
    // this.do=function(){
    //    console.log(this.job)
    // }
}
Employee.prototype.do=function(){
    console.log(this.job)
}

const a = new Employee("bob", "teacher",20,"partTime","good")
const b = new Employee("jim","instractor",25,"fullTime","exelente")
const c= new Employee("jan","manager",35,"fullTime","not bad")
const d= new Employee("alex","stuff",10,"partTime","bad")



d.do()

