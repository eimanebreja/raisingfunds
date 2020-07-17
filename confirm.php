<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>人事評価制度設計の専門コンサルティング</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
</head>

<body id="body-area">
    <section>
        <div class="contact-section confirm-section" id="contact">
            <div class="contact-container confirm-container">
                <div class="contact-title">
                    <h1 class="main-title">お問い合わせ</h1>
                </div>
                <div class="contact-body">
                    <form method="POST" action="send.php">
                        <div class="contact-prof">
                            <div class="contact-info confirm-info pad"><span class="text-label text-confirm">会社名</span>
                            </div>
                            <div class="contact-input confirm-input pad">
                                <?php echo $_POST['comp_name']; ?>
                                <input type="hidden" name="comp_name" class="input-field"
                                    value="<?php echo $_POST['comp_name']; ?>">
                            </div>
                            <div class="contact-info confirm-info"><span class="text-label text-confirm">お名前</span>
                            </div>
                            <div class="contact-input confirm-input">
                                <?php echo $_POST['name']; ?>
                                <input name="name" type="hidden" class="input-field"
                                    value="<?php echo $_POST['name']; ?>">
                            </div>
                            <div class="contact-info confirm-info"><span class="text-label text-confirm">お電話番号</span>
                            </div>
                            <div class="contact-input confirm-input">
                                <?php echo $_POST['phone']; ?>
                                <input name="phone" type="hidden" class="input-field"
                                    value="<?php echo $_POST['phone']; ?>">
                            </div>
                            <div class="contact-info confirm-info"><span class="text-label text-confirm">メールアドレス</span>
                            </div>
                            <div class="contact-input confirm-input">
                                <?php echo $_POST['email']; ?>
                                <input name="email" type="hidden" class="input-field"
                                    value="<?php echo $_POST['email']; ?>">
                            </div>
                            <div class="contact-info confirm-info"><span class="text-label text-confirm">ご希望の連絡方法</span>
                            </div>
                            <div class="contact-input confirm-input">
                                <?php echo $_POST['cont_method']; ?>
                                <input name="cont_method" type="hidden" class="input-field"
                                    value="<?php echo $_POST['cont_method']; ?>">
                            </div>
                            <div class="contact-info text-cont confirm-info"><span
                                    class="text-label text-confirm">お問い合わせ内容</span>
                            </div>
                            <div class="contact-input bot confirm-input">
                                <?php echo $_POST['inquiry']; ?>
                                <input name="inquiry" type="hidden" class="input-field"
                                    value="<?php echo $_POST['inquiry']; ?>">
                            </div>
                        </div>
                        <div class="contact-btn">
                            <input class="btn-back" type="button" value="戻る" onclick="goBack()">
                            <button name="mail" class="btn btn-confirm">内容を送信する</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="assets/js/raisingfunds.js"></script>
    <script>
    function goBack() {
        window.history.back();
    }
    </script>
</body>

</html>