async function populate() {

    const newRequest = '../Assignments/HR';
    const request = new Request(newRequest);
  
    const response = await fetch(request);
    const CompanyInfo = await response.json();
    populateHeader(CompanyInfo);
    populateCompany(CompanyInfo);
}
function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    const myH2 = document.createElement('h2');
    myH1.textContent = obj.companyName;
    myH2.textContent = obj.companySite;
    header.appendChild(myH1);
    header.appendChild(myH2);
  }
function populateCompany(obj) {
    const section = document.querySelector('section');
    const Employees = obj.Employees;
  
    for (const i of Employees) {
      const myArticle = document.createElement('article');
      const myH3 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH3.textContent = i.firstName;
      myPara1.textContent = `Department: ${i.department}`;
      myPara2.textContent = `Designation: ${i.designation}`;
      myPara3.textContent = `Salary: ${i.salary}`;
      myPara4.textContent = `Raise Eligeble: ${i.raiseEligible}`;
  
  
      myArticle.appendChild(myH3);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
  
      section.appendChild(myArticle);
    }
  }
  populate();