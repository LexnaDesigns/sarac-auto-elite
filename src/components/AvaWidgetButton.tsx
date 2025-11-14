

interface AvaWidgetButtonProps {
  className?: string;
}

const AvaWidgetButton = ({ className = "" }: AvaWidgetButtonProps) => {
  return (
    <div className={className}>
      <div className="AskAva-cta" data-product="creditTool" data-type="button" data-widget-id="abe84ce31305"></div>
    </div>
  );
};

export default AvaWidgetButton;
