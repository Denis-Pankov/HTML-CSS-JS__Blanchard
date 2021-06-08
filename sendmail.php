<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

  //От кого письмо
  $mail->setFrom('angelman777@mail.com', 'Денис Панков');
  //Кому отправить
  $mail->addAddress('denispankov11@gmail.com');
  //Тема письма
  $mail->Subject = 'Привет! Магия PHP Работает!';

  //Тело письма
  $body = '<h1>Видишь это?! Ты - КРУТ!</h1>';

  if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
  if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['tel'].'</p>';
	}

  $mail->Body = $body;

  //Отправка
  if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!!!!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>

