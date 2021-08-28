import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import './search.style.scss';
import { useState } from 'react';
import { SearchOutlined, YoutubeSearchedFor } from '@material-ui/icons';
import ListItem from '../list-item/list-item.component';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem, selectMovieSearch, selectResult, selectTvSearch, setMovieSearch, setResult, setSeItem, setTvSearch } from '../../features/search/searchSlice';

const Search = () => {

    const movieSearch = useSelector(selectMovieSearch);
    const tvSearch = useSelector(selectTvSearch);
    const seItem = useSelector(selectItem);
    const result = useSelector(selectResult);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSeItem(e.target.value))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(seItem)
        async function fetchMovieSearch() {
            const movie_search = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&page=1&include_adult=false&query=${seItem}`);
            dispatch(setMovieSearch(movie_search.data.results));
            return movie_search;
        }

        async function fetchTvSearch() {
            const tv_search = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API}&language=en-US&page=1&include_adult=false&query=${seItem}`);
            dispatch(setTvSearch(tv_search.data.results));
            return tv_search;
        }

        fetchMovieSearch();
        fetchTvSearch();

        console.log(movieSearch);
        console.log(tvSearch);

        if (movieSearch && tvSearch) {
            dispatch(setResult(true));
        }

    }

    const handleText = (e) => {
        dispatch(setResult(false));
    }

    const placement = "bottom";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="search">
            <div className="" onClick={handleShow}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Header as="h3" closeButton>Search</Popover.Header>
                            <Popover.Body>
                                <form onSubmit={handleSubmit}>
                                    <div style={{}}>
                                        <YoutubeSearchedFor style={{
                                             position: 'absolute', right: '10',top:'10' ,
                                             width: 20, height: 20, color: "var(--appcolor)" 
                                             }} />
                                        <TextField autoFocus="true" color="secondary" label="search" onChange={handleSearch} onClick={handleText} />
                                    </div>
                                </form>
                            </Popover.Body>
                        </Popover>
                    }
                >

                    <SearchOutlined className='icon link' />
                </OverlayTrigger>
            </div>
            {
                result && (
                    <Modal className='mod'
                        variant="secondary"
                        size="xl"
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        scrollable={true}
                    >
                        <Modal.Header closeButton="red">
                            <Modal.Title>
                                <h1>SEARCH ITEMS</h1>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <>
                                <h1 style={{ color: "var(--color)" }}>Movies</h1>
                                <div style={{
                                    marginTop: "50px",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6, 1fr)",
                                    gridGap: 20, paddingTop: "10px",
                                    textAlign: "center",
                                }}>
                                    {
                                        movieSearch.map((list, i) => (
                                            <ListItem key={i} title="Movies" type="movie" movie={list} />
                                        ))
                                    }
                                </div>
                                <h1 style={{ color: "var(--color)", marginTop: "100px" }}>TV Shows</h1>
                                <div style={{
                                    marginTop: "50px",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6, 1fr)",
                                    gridGap: 20, paddingTop: "10px",
                                    textAlign: "center",
                                }}>
                                    {
                                        tvSearch.map((list, i) => (
                                            <ListItem key={i} title="Movies" type="tv" movie={list} />
                                        ))
                                    }
                                </div>
                            </>

                        </Modal.Body>
                    </Modal>
                )
            }
        </div>
    )
}

export default Search;