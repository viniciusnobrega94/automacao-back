package br.com.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
		(
		glue = { "br.com.steps" }, 
		features = {"src/main/java/br/com/features/"}, 
		monochrome = true, 
		plugin = { "pretty", "html:Reports/cucumber"}, 
		tags = { "@validachamada" }
		)

public class Runner {
	
}
