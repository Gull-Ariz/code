import React from 'react'
import './ContactPage.css'

function ContactPage() {
    return (
        <section>
	<div class="container">
	<div class="row message-header">
		<div class="col-10">
			<h6>Message Box</h6>
		</div>

		<div class="col-2 d-flex flex-row justify-around align-center img-class">
			<a href="#"><i class="far fa-bell float-right"></i></a>
			<a href="#"><img src="../../../images/service2.png"/></a>
		</div>

	</div>
	<div class="row">
		<div class="col-lg-3 col-md-3 col-12 contact-box">
			<div class="d-flex flex-column p-2">
				<div class="d-flex flex-column">
					<input type="text" name="" placeholder="search"/>		
				</div>
				<div class="d-flex flex-row justify-center align-center box-class">
					<img src="../../../images/service2.png"/>
					<h6>Muhammad Hamza</h6>

				</div>
				
					
			</div>
		</div>
		<div class="col-lg-6 col-md-6 col-12 message-box">
			<div class="d-flex flex-column">
				<div class="msgwrite">
					
				</div>
				<div class="msgsend d-flex flex-row justify-around">
					<input type="text" name="" placeholder="Text Here"/>
					<a href="#"><i class="fas fa-chevron-circle-right fa-2x"></i></a>

				</div>
				
			</div>

		</div>

		<div class="col-lg-3 col-md-3 col-12 contact-details p-5">
			<div class="d-flex flex-column justify-center">
				<div class="d-flex flex-column align-center">
					<img src="../../../images/service2.png"/>
					<h6>Muhammad Hamza</h6>
				</div>
				
				<div class="d-flex flex-row m-2 justify-between align-center">
						<a href="#" class="cricularitem"><i class="fas fa-envelope"></i></a>
						<a href="#" class="cricularitem"><i class="fas fa-phone"></i></a>
						<a href="#" class="cricularitem"><i class="fas fa-video-slash"></i></a>
						<a href="#" class="cricularitem"><i class="fas fa-info-circle"></i></a>					
				</div>

				<div class="d-flex flex-column justify-center align-center">
					<h6>Email</h6>
					<p>chhamzay@gmail.com</p>
					<h6>Phone Number</h6>
					<p>+92333-1579872</p>
					<h6>Address</h6>
					<p>PGSHS Mohlanwall</p>
				</div>
			</div>
		</div>

	</div>
</div>
</section>
    )
}

export default ContactPage
