async function submitForm() {
    const responses = {
      time: document.getElementById("time").value,
      grades: document.getElementById("grades").value,
      environment: document.getElementById("environment").value,
      confidence: document.getElementById("confidence").value,
      assessment: document.getElementById("assessment").value,
    };
  
    const lessonPlan = `Lesson Plan: Focus on ${responses.grades} in a ${responses.environment} setting for ${responses.time}.`;
    const assessment = `Assessment: Include reflective questions for ${responses.grades} about their confidence level and improvement suggestions.`;
  
    document.getElementById("results").innerHTML = `
      <h2>Educator Responses</h2>
      <pre>${JSON.stringify(responses, null, 2)}</pre>
      <h2>Generated Lesson Plan</h2>
      <p>${lessonPlan}</p>
      <h2>Generated Assessment</h2>
      <p>${assessment}</p>
    `;
  }
  
