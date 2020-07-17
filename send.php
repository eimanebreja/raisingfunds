<?php
if (isset($_POST['mail'])) {
    $from = $_POST['email'];
    $comp_name = $_POST['comp_name'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $cont_method = $_POST['cont_method'];
    $inquiry = $_POST['inquiry'];
 
    $to = "nimuel24@gmail.com";
    $subject = '=?UTF-8?B?' . base64_encode('人事評価制度設計の専門コンサルティング') . '?=';
    $headers = array(
        "From: {$from}",
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=utf-8"
    );

    $message = "会社名 :" .$comp_name. "\n"
    ."お名前 :" .$name ."\n"
    ."お電話番号 :" .$phone ."\n"
    ."メールアドレス :" .$email ."\n"
    ."ご希望の連絡方法 :" .$cont_method ."\n"
    ."お問い合わせ内容 :" .$inquiry ."\n";

    mail($to, $subject, $message, implode("\r\n", $headers));
    
    echo "<script>window.open('thanks.php','_self')</script>";

}

?>