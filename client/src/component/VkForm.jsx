import React, { useState } from 'react';
import styled from 'styled-components'
import VkService from '../services/vkService';

const StyledForm = styled.form`
    width: 500px;
    height: 400px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const StyledInput = styled.input`
    outline: none;
    margin: 10px 0 0 0;
    width: 60%
`

const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    cursor: pointer;
`

const VkForm = () => {
    const [info, setInfo] = useState({
        message: '',
        url: '',
        file: {}
    })

    const sendPhoto = async (photo, url, e) => {
        e.preventDefault()
        const id = url.split('=')[1]
        await VkService.sendPhoto(photo, id)

    }

    const sendMessage = async (message, url, e) => {
        e.preventDefault()
        const id = url.split('=')[1]
        await VkService.sendMessage(message, id)

    }



    return (
        <StyledForm>
            <StyledInput
                type="text"
                className='url'
                placeholder='Введите ссылку на переписку во Вконтакте'
                value={info.url}
                onChange={e => setInfo({ ...info, url: e.target.value })} />
            <StyledInput
                type="text"
                className='message'
                placeholder='Введите свое сообщение'
                value={info.message}
                onChange={e => setInfo({ ...info, message: e.target.value })} />
            <StyledInput
                type="file"
                className='file'
                onChange={e => setInfo({ ...info, file: e.target.files[0] })} />
            {info.message !== '' ?
                <StyledButton onClick={(e) => sendMessage(info.file, info.url, e)}>Отправить сообщение</StyledButton>
                :
                <StyledButton onClick={(e) => sendPhoto(info.file, info.url, e)}>Отправить фото</StyledButton>

            }

        </StyledForm>
    );
};

export default VkForm;