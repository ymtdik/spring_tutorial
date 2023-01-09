'use strict';

jQuery(function($) {

	$('#btn-signup').click(function(event) {

		signupUser();
	});
});


// ユーザー登録処理
function signupUser() {

	removeValidResult();

	var formData = $('#signup-form').serializeArray();

	$.ajax({
		type: "POST",
		cache: false,
		url: '/user/signup/rest',
		data: formData,
		dataType: 'json',
	}).done(function(data) {
		// ajax成功時の処理
		console.log(data);

		if (data.result == 90) {
			$.each(data.errors, function(key, value) {
				reflectValidResult(key, value)
			});
		} else if (data.result == 0) {
			alert('ユーザーを登録しました');
			// ログイン画面にリダイレクト
			window.location.href = '/login';
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		// ajax失敗時の処理
		alert('ユーザー登録に失敗しました')
	}).always(function() {
		// 常に実行する処理
	});
}

// バリデーション結果をクリア
function removeValidResult() {
	$('.is-invalie').removeClass('is-invalid');
	$('.invalid-feedback').remove();
	$('.text-danger').remove();
}

// バリデーション結果の反映
function reflectValidResult(key, value) {
	if (key == 'gender') { //性別の場合

		$('input[name=' + key + ']').addClass('is-invalid');
		$('input[name=' + key + ']').parent().parent().append('<div class="text-danger">' + value + '</div>');
	} else {
		// 性別以外の場合
		$('input[id=' + key + ']').addClass("is-invalid");
		$('input[id=' + key + ']').after('<div class="invalid-feedback">' + value + '</div>');
	}

}



