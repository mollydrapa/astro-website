interface Props {
  image: string;
  title: string;
  date: string;
  source: string;
  filters: string;
  self: boolean;
}

function Image({image, title, date, source, filters, self}: Props) {

  return (
    <div className="w-max flex flex-col pt-6">
      <div className="self-center w-min" style={{width: 506, height: 500}}>
        <img
          src={image}
          sizes="506w"
          className="object-cover rounded-xl max-w-506px"
          style={{width: 506, height: 500}}
        />
      </div>
      <h2 className="text-2xl text-white text-center font-bold pt-6 pb-4">{title}</h2>
      {self ? <h3 className="text-l text-white text-center pb-4">Processed {date}</h3> : <h3 className="text-l text-white text-center pb-4">Processed {date} - {source} data</h3>}
      {self ? <h4 className="text-sm text-white text-center">{filters}</h4> : <h4 className="text-sm text-white text-center">Filters used: {filters}</h4>}
    </div>
  )

}

export default Image