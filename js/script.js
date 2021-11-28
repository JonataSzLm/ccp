function alteraModal(op) {
	let titulo = document.getElementById('tituloModal');
	let p = document.getElementById('pModal');
	let select = document.getElementById('area');
	let subtitulo = document.getElementById('subtituloModal');
	let fb = document.getElementById('feedbackModal');
	if (op == 1 || op == 4) {
		if (op == 1) {
			titulo.innerHTML = "Emitir Relatório de Área de Negócio:";
			subtitulo.style.display = 'none';
		} else if (op == 4) {
			titulo.innerHTML = "Emitir Relatório Completo:";
			subtitulo.style.display = 'block';
			subtitulo.innerHTML = "(Área de Negócio, Produtos e Viagens)";
		}
		p.innerHTML = "Área:";
		select.innerHTML =
				'<option value="" selected disabled hidden></option>' +
				'<option value="3">Colocador</option>' +
				'<option value="2">Dono de Viagem</option>' +
				'<option value="1">Fornecedor</option>' +
				'<option value="4">Outro</option>';
	} else if (op == 2) {
		titulo.innerHTML = "Emitir Relatório de Produtos:";
		p.innerHTML = "Tipo de Produto:";
		select.innerHTML =
				'<option value="" selected disabled hidden></option>' +
				'<option value="1">Roupas</option>' +
				'<option value="2">Cosméticos</option>' +
				'<option value="3">Enxovais</option>' +
				'<option value="4">Utensílios Domésticos</option>';
	} else if (op == 3) {
		titulo.innerHTML = "Emitir Relatório de Viagens:";
		p.innerHTML = "Responsavel:";
		select.innerHTML =
				'<option value="" selected disabled hidden></option>' +
				'<option value="1">João da Silva</option>' +
				'<option value="2">Roberto Ribeiro</option>' +
				'<option value="3">José Alcantara</option>' +
				'<option value="4">Tiago Oliveira Junior</option>' +
				'<option value="5">Pedro Prado</option>' +
				'<option value="6">Jonas Marcel</option>' +
				'<option value="7">José Emanuel</option>' +
				'<option value="8">Aureliano</option>';
	} else if (op == 5) {
		fb.innerHTML = "Pergunta Cadastrada com Sucesso!"
	} else if (op == 6) {
		fb.innerHTML = "Pergunta Enviada com Sucesso!"
	}
}