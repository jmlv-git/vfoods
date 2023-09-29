import { useContext, useState } from 'react';
import { Header } from '../componets/Header/Header'
import { SideBar } from '../componets/SideBar/SideBar'
import Modal from 'react-modal';
import Button from '../componets/Atomos/Button';
import DadosPage from '../componets/Indicator/DadosPage';
import ColaboradoresPage from '../componets/Indicator/ColaboradoresPage';
import MetasPage from '../componets/Indicator/MetasPage';
import { IndicatorContext } from '../contexts/IndicatorContext';
import { Link } from 'react-router-dom';


export default function Indicators() {

    const [indicatorModalIsOpen, setIndicatorModalIsOpen] = useState(false);
    const [modalPage, setModalPage] = useState(0); // 0 = Dados, 1 = Colaboradores, 2 = Meta
    const { createIndicator } = useContext(IndicatorContext);

    function openIndicatorModal() {
        setIndicatorModalIsOpen(true);
    }

    function closeModal() {
        setIndicatorModalIsOpen(false);
    }

    // Função que muda a página do modal
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement>, page: number) => {
        event.preventDefault();

        setModalPage(page);
    }

    // Função que muda a página do modal para a próxima
    const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setModalPage(modalPage + 1);
    }

    // Função que muda a página do modal para a anterior
    const handlePreviousPage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setModalPage(modalPage - 1);
    }

    // Função que define qual o botão de ação do modal se é "Próxima" ou "Criar"
    function nextButton() {

        if (modalPage < 2) {
            return (
                <div className='mr-3 w-full flex justify-end'>
                    <button onClick={handleNextPage}>
                        <Button label='Próxima' color='vermelho' />
                    </button>
                </div>
            )
        }

        return (
            <div className='mr-3'>
                <Link onClick={createIndicator} to="/indicators/new_indicator">
                    <Button label='Criar' color='vermelho' />
                </Link>
                
            </div>
        )
    }

    return (
        <>
            
            <div className='flex w-screen'>

                <SideBar />

                <div className='flex flex-col pt-12 ml-[15rem] w-full'>

                    <div className='flex flex-col items-center pb-16'>

                        <Header/>

                    </div>

                    <button onClick={openIndicatorModal} className='flex flex-col items-center justify-center border rounded-10 border-cinza-100 gap-8 h-[23.125rem] w-[29.75rem] ml-24'>

                        <img src="src\assets\add.png" alt="add_button" />

                        <h4 className=''>
                            Criar um novo Indicador
                        </h4>

                    </button>

                </div>
            </div>


            <Modal
                isOpen={indicatorModalIsOpen}
                onRequestClose={closeModal}
                className="fixed top-0 right-0 bottom-0 w-[43.75rem] bg-white p-8 rounded-[25px] drop-shadow-modal overflow-auto"
                contentLabel="Criar indicador"
            >
                <div className='flex flex-col min-h-full'>
                    <div className='flex-grow'>
                        <div className='flex flex-col gap-12'>

                            <button onClick={closeModal}><img src="/src/assets/back-arrow.svg" alt="Voltar" /></button>
                            <div className='flex justify-around text-3xl border-b-2 mt-8 w-full font-bold static'>

                                <button onClick={(event) => handleChangePage(event, 0)}>
                                    <p className={modalPage == 0 ? 'border-b-2 border-vermelho pb-2 absolute top-[5.9rem] left-20' : 'text-cinza-300 pb-2 absolute top-[5.9rem] left-20'}>
                                        Dados
                                    </p>
                                </button>

                                <button onClick={(event) => handleChangePage(event, 1)}>
                                    <p className={modalPage == 1 ? 'border-b-2 border-vermelho pb-2 absolute top-[5.9rem] left-[15.62rem]' : 'text-cinza-300 pb-2 absolute top-[5.9rem] left-[15.62rem]'}>
                                        Colaboradores
                                    </p>
                                </button>

                                <button onClick={(event) => handleChangePage(event, 2)}>
                                    <p className={modalPage == 2 ? 'border-b-2 border-vermelho pb-2 absolute top-[5.9rem] right-20' : 'text-cinza-300 pb-2 absolute top-[5.9rem] right-20'}>
                                        Meta
                                    </p>
                                </button>

                            </div>

                            <div className='px-14'>
                                {modalPage == 0 && < DadosPage />}
                                {modalPage == 1 && < ColaboradoresPage />}
                                {modalPage == 2 && < MetasPage />}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-center my-10 min-w-full'>
                        {modalPage > 0 && (
                            <div className='ml-3'>
                                <button onClick={handlePreviousPage}>
                                    <Button label='Voltar' color='vermelho' />
                                </button>
                            </div>
                        )}

                        {nextButton()}
                    </div>
                </div>

            </Modal>
            
        </>
    )
}