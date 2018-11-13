function doOnCurrentPageChanged(survey) {
    document
        .getElementById('surveyPrev')
        .style
        .display = !survey.isFirstPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyNext')
        .style
        .display = !survey.isLastPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyComplete')
        .style
        .display = survey.isLastPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyProgress')
        .innerText = "Page " + (
    survey.currentPageNo + 1) + " of " + survey.visiblePageCount + ".";
    if (document.getElementById('surveyPageNo')) 
        document
            .getElementById('surveyPageNo')
            .value = survey.currentPageNo;
    }

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "",
    pages: [
        {
            
      
            questions: [
                {title: "Please enter your name:",
      name: "name",
      type: "text",
      placeHolder: "Jon Snow",
      isRequired: true
    }, {
      title: "Your birthdate:",
      name: "birthdate",
      type: "text",
      inputType: "date",
      isRequired: true
    }]}, {
      questions:[{
      title: "Your e-mail:",
      name: "email",
      type: "text",
      inputType: "email",
      placeHolder: "jon.snow@nightwatch.org",
      isRequired: true,
      validators: [{
        type: "email"
      }]
    }, {
      "type": "dropdown",
      "name": "qualification",
      "title": "Highest level of Education completed:",
      "startWithNewLine": false,
      "defaultValue": "Choose...",
      "choices": ["High School", "College Diploma Certificate", "Bachelors", "Masters", "PhD"]
    }]}, {
      questions:[{
      title: "What knowledge areas and technical skills are your strongest?",
      name: "strengths",
      type: "text",
      isRequired: true
    }, {
      name: "2_years_expectation",
      type: "text",
      title: "Where do you expect to be in two years?",
      isRequired: true
    }]}, {
      questions:[{
      title: "How does this position fit in with your long-term goals?",
      name: "why_this_job",
      type: "text",
      isRequired: true
    }, {
      name: "salary_expectation",
      type: "text",
      title: "What is your salary expectation?",
      isRequired: true
    }]}, {
      questions: [{
      title: "Would you be willing to participate in a Skype interview?",
      type: "radiogroup",
      choices: [
        "Yes", "No"
      ],
      name: "skype_interview",
      valueName: "skype_interview"
    }, {
      name: "heard_job",
      type: "radiogroup",
      choices: [
        "LinkedIn", "Indeed", "Friend", "Company Website", "Current Employee"
      ],
      title: "Where did you hear about this job?",
      valueName: "heard_job"
    }]}
    ]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
window.location = "surveyComplete.html";
});

survey.showTitle = false;

$("#surveyElement").Survey({model: survey, onCurrentPageChanged: doOnCurrentPageChanged});

doOnCurrentPageChanged(survey);
survey.showTitle = false;
