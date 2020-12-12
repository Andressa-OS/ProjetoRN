import { conexaoFS } from './conexaoFB';

export class FloresFB {
    state = {
        colecao: conexaoFS.collection('FloriculturaFirebase/itens/flores')
    }

    pegarItens() {
        return this.state.colecao;
    }

    adicionarFlor(flor) {
        this.state.colecao.add(flor);
    }

    editarFlor(flor) {
        const { id } = flor;
        delete flor.id;

        this.state.colecao.doc(id).update(flor);
    }

    removerFlor(flor) {
        this.state.colecao.doc(flor.id).delete();
    }
}